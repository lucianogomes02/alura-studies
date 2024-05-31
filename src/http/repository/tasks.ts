import axios from 'axios'
import ITarefa from '../../types/tarefas';
import IResposta from './response';

export default class TasksRepository {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getAllTasks(): Promise<ITarefa[]> {
        const getUrl = `${this.baseUrl}/tasks`;
        try {
            const resposta = await axios.get(getUrl);

            if (resposta.data !== null || resposta.data.length > 0){
                return resposta.data.map((tarefa: any) => {
                    return {
                        id: tarefa.id,
                        nome: tarefa.name,
                        tempo: tarefa.time,
                        status: tarefa.status,
                        criadoEm: tarefa.created_at,
                        atualizadoEm: tarefa.updated_at
                    }
                }
            )
        } else {
            return [];
        }
        } catch (error) {
            throw error;
        }
    }

    async getTasksByDate(date: string): Promise<ITarefa[]> {
        const getUrlByDate = `${this.baseUrl}/tasks?date=${date}`;
        try {
            const resposta = await axios.get(getUrlByDate);

            if (resposta.data !== null || resposta.data.length > 0){
                return resposta.data.map((tarefa: any) => {
                    return {
                        id: tarefa.id,
                        nome: tarefa.name,
                        tempo: tarefa.time,
                        status: tarefa.status,
                        criadoEm: tarefa.created_at,
                        atualizadoEm: tarefa.updated_at
                    }
                }
            )
        } else {
            return [];
        }
        } catch (error) {
            throw error;
        }
    }

    async createTask(task: ITarefa): Promise<IResposta> {
        const postUrl = `${this.baseUrl}/tasks/`;
        try {
            const resposta = await axios.post(postUrl, task);
            if (resposta.data !== null || resposta.data !== undefined){
                return {
                    status: resposta.status,
                    message: resposta.data.message,
                    data: resposta.data
                }
            } else {
                return {
                    status: resposta.status,
                    message: 'Erro ao criar tarefa',
                    data: null
                }
            
            }
        } catch (error) {
            throw error;
        }
    }

    async updateTask(task: ITarefa): Promise<IResposta> {
        const postUrl = `${this.baseUrl}/tasks/${task.id}/`;
        try {
            const resposta = await axios.patch(postUrl, task);
            if (resposta.data !== null || resposta.data !== undefined){
                return {
                    status: resposta.status,
                    message: resposta.data.message,
                    data: resposta.data
                }
            } else {
                return {
                    status: resposta.status,
                    message: 'Erro ao atualizar a tarefa',
                    data: null
                }
            
            }
        } catch (error) {
            throw error;
        }
    }
}