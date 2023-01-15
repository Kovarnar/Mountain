import * as React from 'react';
import { useForm } from 'react-hook-form';
import '../sass/layouts/FormUser.scss'

function FormUser() {
    const {
        register, 
        handleSubmit,
        
        formState: { errors }
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: '',
            password: ''
        }
    });

    return (
        <form 
            onSubmit={handleSubmit((data) => {console.log(data);})} 
            className="form"
            action="#" 
            method="post"
        >
            <div className="form__div">
                <input {...register("email", {
                        required: "Вы не ввели email",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Некоректный email'
                        }
                    })} 
                    type="text" 
                    placeholder="E-mail" 
                    className="form__input"
                />
                <p className="form__info">{errors.email?.message}</p>
            </div>
            <div className="form__div">
                <input {...register("password", {
                        required: 'Вы не ввели пароль',
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/i,
                            message: 'Парль должен включать большую и маленькую букву, цыфру, символ'
                        },
                        minLength: {
                            value: 6,
                            message: "Мынимальная длинна 6 символов"
                        }
                    })} 
                    type="password" 
                    placeholder="Пароль" 
                    className="form__input"
                />
                <p className="form__info">{errors.password?.message}</p>
            </div>
            <button className="form__btn" type="submit">Войти</button>
            
        </form>
    );
}

export default FormUser;