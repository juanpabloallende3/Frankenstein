import getConnection from '../../db/getConnection.js';
import { generateError } from '../../helpers/generateError.js';

const deleteProjectById = async (id) => {
    let connection;
    try {
        connection = await getConnection();
        await connection.query(
            `
        DELETE FROM projects WHERE project_id = ?`,
            [id]
        );
        return;
    } catch (error) {
        throw generateError('Problema borrar en BBDD');
    }
};
export { deleteProjectById };
