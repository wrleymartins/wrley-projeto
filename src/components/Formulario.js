import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';

const Formulario = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const mutation = useMutation(data => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', data);
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Título:</label>
        <input {...register('title', { required: 'Título é obrigatório' })} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        <label>Corpo:</label>
        <textarea {...register('body', { required: 'Corpo é obrigatório' })} />
        {errors.body && <p>{errors.body.message}</p>}
      </div>
      <div>
        <label>ID do Usuário:</label>
        <input type="number" {...register('userId', { required: 'ID do usuário é obrigatório' })} />
        {errors.userId && <p>{errors.userId.message}</p>}
      </div>
      <button type="submit">Enviar</button>
      {mutation.isLoading && <p>Enviando...</p>}
      {mutation.isError && <p>Erro: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>Dados enviados com sucesso!</p>}
    </form>
  );
};

export default Formulario;