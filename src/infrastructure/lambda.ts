// import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
// import { LaTeXController } from './controllers/latex.controller';
// import { config } from 'dotenv';

// config();

// const latexController = new LaTeXController();

// export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//   const body = JSON.parse(event.body || '{}');
//   const response = {
//     statusCode: 200,
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: ''
//   };

//   try {
//     const svg = await latexController.convertLatex(
//       {
//         body: body,
//       } as any,
//       {
//         setHeader: () => {},
//         send: (data: string) => (response.body = data),
//         status: (code: number) => (response.statusCode = code)
//       } as any
//     );
//   } catch (err) {
//     response.statusCode = 500;
//     response.body = err.message;
//   }

//   return response;
// };