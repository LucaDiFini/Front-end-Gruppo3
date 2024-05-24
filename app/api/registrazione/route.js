import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
    const { nome, cognome, email, password } = await request.json();

    try {
        const response = await axios.post('http://localhost:8080/auth/register', {
            nome,
            cognome,
            email,
            password,
        });

        return NextResponse.json(response.data, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: error.response ? error.response.data : 'Internal Server Error' },
            { status: error.response ? error.response.status : 500 }
        );
    }
}