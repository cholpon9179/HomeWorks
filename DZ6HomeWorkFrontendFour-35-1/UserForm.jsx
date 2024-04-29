import React from 'react'
import { useForm } from 'react-hook-form'
import './UserForm.css'

const UserForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const submitHandler = (data) => {
    onSubmit(data)
    reset()
  }

  return (
    <form className="user-form" onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <label htmlFor="name">Имя:</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span className="error">Это поле обязательно для заполнения</span>}
      </div>
      <div className="form-group">
        <label htmlFor="username">Имя пользователя:</label>
        <input {...register('username', { required: true })} />
        {errors.username && <span className="error">Это поле обязательно для заполнения</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          {...register('email', {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
          })}
        />
        {errors.email && <span className="error">Введите корректный email</span>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Телефон:</label>
        <input
          {...register('phone', {
            required: true,
            pattern: /^[0-9]+$/ 
          })}
        />
        {errors.phone && <span className="error">Телефон должен содержать только цифры</span>}
      </div>
      <div className="form-group">
        <label htmlFor="website">Вебсайт:</label>
        <input {...register('website')} />
      </div>
      <button type="submit" className="btn-submit">Создать</button>
      <button type="button" className="btn-clear" onClick={reset}>Очистить форму</button>
    </form>
  )
}

export default UserForm
