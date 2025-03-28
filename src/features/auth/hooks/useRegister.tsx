import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { createUser } from '../authServices';
import toast from 'react-hot-toast';

const formSchema = z.object({
  username: z.string().nonempty({ message: "El usuario es requerido" }),
  email: z.string().nonempty({ message: "El email es requerido" }).email({message: "El email es invalido"}),
  password: z.string().nonempty({ message: "La contraseña es requerida" }).min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
});

export type FormData = z.infer<typeof formSchema>;

const useRegister = () => {

  const navigate = useNavigate()
  const { mutate, isPending } = useMutation({
    mutationFn: createUser,
    mutationKey: ['createUser'],
    onSuccess: (data) => {
      navigate('/login')
      toast.success(`Usuario registrado con el ID: ${data.id}`)
    }
  })

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormData) => {
    mutate(values);
  };

  return { form, onSubmit, isPending };
};

export default useRegister;
