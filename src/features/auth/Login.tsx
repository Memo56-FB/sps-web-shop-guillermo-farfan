import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import eagleLogo from "../../assets/EagleWearLogo.png"
import useLogin from "./hooks/useLogin"
import { Link } from "react-router"

export const Login = () => {
  const { form, onSubmit} = useLogin()

  return (
    <main className="flex flex-col p-4 pt-1 h-dvh bg-gray-50 justify-center">
      <img src={eagleLogo} loading="lazy" alt="eaglewear logo" className="aspect-square w-24 mb-2 mx-auto" />
      <Card>
        <CardHeader>
          <CardTitle className="text-center font-bold text-2xl">Acceder</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl>
                      <Input placeholder="Usuario" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input placeholder="*****" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Iniciar sesión</Button>
              <div className="grid grid-cols-[3fr_1fr_2fr] gap-4 text-center">
                <Link to="/reset-password" className="font-semibold text-red-600">¿Olvidaste tu contraseña?</Link>
                <p>|</p>
                <Link to="/register" className="font-semibold text-red-600">Crear cuenta</Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  )
}
