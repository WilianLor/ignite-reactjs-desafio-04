import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { IFood } from "../../types/Food";
import { FormHandles } from "@unform/core";

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: IFood;
  handleUpdateFood: (food: IFood) => Promise<void>;
}

interface FormData {
  image: string;
  name: string;
  price: string;
  description: string;
}

const ModalEditFood = ({
  editingFood,
  handleUpdateFood,
  isOpen,
  setIsOpen,
}: ModalEditFoodProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: FormData) => {
    handleUpdateFood({
      ...data,
      id: editingFood.id,
      available: editingFood.available,
    });
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={editingFood}
      >
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
