import React from "react";
import { Box, Botao } from "../UI";
import Items from "../Items";

import { extratoLista } from "../../info";

export const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(({ id, type, from, value, date }) => {
                return (
                    <Items id={id} type={type} from={from} value={value} date={date} />
                )
            })}
            <Botao>Ver Mais</Botao>

        </Box>
    )
}