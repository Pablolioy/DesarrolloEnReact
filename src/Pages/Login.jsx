import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login } from "../services/usuarioService";

import { useNavigate } from "react-router-dom";


function Login({ setLogin, setUser }) {


    const navigate = useNavigate({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async (data) => {
        try {
            const user = await login(data.email, data.password)
            setLogin(true)
            setUser(user)
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "50%", display: "block", marginInline: "auto", color: "white" }}>
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
                    Ingresar
                </Button>
            </Form>
        </div>
    );
}

export default Login;
