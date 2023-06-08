import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { create } from "../services/usuarioService";
import { useState } from "react";
import AlertCustom from "../componentes/AlertCustom"
import { registroMessage } from "../Utils/errorMessage";

function Registro() {
    const [alert, setAlert] = useState({ variant: "", text: "" });


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async (data) => {
        try {
            await create(data);
            setAlert({
                variant: "success",
                text: "Gracias por registrarte",
                duration: 3000,
                link: "/login",
            });
        } catch (e) {
            console.log(e);
            setAlert({
                variant: "danger",
                text: registroMessage[e.code] || "Ha ocurrido error",
            });
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "50%", display: "block", marginInline: "auto", color: "white" }}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su nombre"
                        {...register("nombre", { required: true })}
                    />

                    {errors.nombre && (
                        <Form.Text className="text-muted">
                            El Campo es obligatorio
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese su apellido"
                        {...register("apellido")}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingrese su email"
                        {...register("email", {
                            required: true,
                            pattern:
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                        })}
                    />
                    {errors.email && (
                        <div>
                            <Form.Text className="text-muted">
                                {errors.email?.type === "required" && (
                                    <span>El campo es obligatorio</span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span>Formato email no valido</span>
                                )}
                            </Form.Text>
                        </div>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        autoComplete="true"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 12,
                        })}
                    />
                    {errors.password && (
                        <div>
                            <Form.Text className="text-muted">
                                {errors.password?.type === "required" && (
                                    <span>El campo es obligatorio</span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span>Debe completar al menos 6 caracteres</span>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <span>Debe completar menos de 12 caracteres</span>
                                )}
                            </Form.Text>
                        </div>
                    )}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
                <AlertCustom
                    {...alert}
                />
            </Form>
        </div>
    );
}

export default Registro;
