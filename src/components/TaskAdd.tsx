
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TaskAddProps {
  onSave: () => void; // Prop para passar a função de salvar
}


export function TaskAdd(props: TaskAddProps) {
  const { onSave } = props; // Desestrutura as props dentro da função
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Nova Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Adicionar nova Task</DialogTitle>
          <DialogDescription>
            Personalize sua task aqui.<br></br>Clique em salvar quando hover acabado.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
          <Label htmlFor="name">Título</Label>
          <Input id="name" placeholder="Passear com o totó"/>
          <Textarea placeholder="Ps: Lembrar de passar na farmácia pra comprar aquela caixa de Halls." />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="default" onClick={onSave}>
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
