"use client"

import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open: boolean) => {
        if (!open) onClose()
    }

    return (
        <Dialog  open={isOpen} onOpenChange={onChange}>
            <DialogContent overlayClassName="bg-black/80">
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    )
}