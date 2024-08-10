import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



export function Task() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Passear com o Totó</CardTitle>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <p>Ps: Lembrar de passar na farmácia pra comprar aquela caixa de Halls.</p>
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Button className="w-full" variant="outline">Editar</Button>
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full" variant="default">Encerrar task</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que quer encerrar a task?</AlertDialogTitle>
          <AlertDialogDescription>
            Ao clicar em continuar, essa task será escluída de sua lista. <br></br>Se você não a cuncluiu ainda, clique em cancelar.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </CardFooter>
    </Card>
  )
}