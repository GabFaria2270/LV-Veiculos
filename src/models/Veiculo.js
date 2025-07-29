import pool from "../database/data";

const cadastrar = async (veiculo) => {
    const {
        modelo,
        ano_fabricacao,
        ano_modelo,
        cor,
        num_portas,
        fotos,
        categoria_id,
        montadora_id,
        tipo_cambio,
        tipo_direcao
    } = veiculo;
    const query = `
        INSERT INTO veiculos (
            modelo, ano_fabricacao, ano_modelo, cor, num_portas, fotos,
            categoria_id, montadora_id, tipo_cambio, tipo_direcao
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        modelo,
        ano_fabricacao,
        ano_modelo,
        cor,
        num_portas,
        JSON.stringify(fotos),
        categoria_id,
        montadora_id,
        tipo_cambio,
        tipo_direcao
    ];
    const [result] = await pool.query(query, values);
    return result.insertId;
}

export default {
    cadastrar
}