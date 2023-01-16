import * as React from 'react';
import { useForm } from "react-hook-form";
import '../sass/layouts/HelpForm.scss';
import BtnOrange from './BtnOrange';

function HelpForm() {
    const {register, handleSubmit, formState: { errors }} = useForm({
        mode: "onBlur",
        defaultValues: {
            name: '',
            phone: '',
            email: ''
        }
    });

    return (
        <form 
            onSubmit={handleSubmit((data) => {console.log(data);})}
            className='help-form' 
            action="#" 
            method="post"
        >
            <div className="help-form__div">
                <input {...register("name", {
                        required: "Вы не ввели имя",
                        pattern: {
                            value: /^[A-Z]/i,
                            message: 'Некоректное имя'
                        },
                        minLength: {
                            value: 3,
                            message: "Мынимальная длинна 3 символа"
                        }
                    })} 
                    type="text" 
                    placeholder="Имя" 
                    className="form__input"
                />
                <p className="form__info">{errors.name?.message}</p>
            </div>
            <div className="help-form__div">
                <input {...register("phone", {
                        required: "Вы не ввели телефон",
                        pattern: {
                            value: /^[0-9]/i,
                            message: 'Некоректный телефон'
                        },
                        minLength: {
                            value: 10,
                            message: "Мынимальная длинна 10 "
                        }
                    })} 
                    type="text" 
                    placeholder="Телефон" 
                    className="form__input"
                />
                <p className="form__info">{errors.phone?.message}</p>
            </div>
            <div className="help-form__div">
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
            <BtnOrange btnOrng='Отправить' />
        </form>
    );
}

export default HelpForm;