import  { AxiosError } from "axios";
import { NextResponse } from "next/server";


export type ApiError = AxiosError<{ error: string }>;


export const logErrorResponse = (error: ApiError) => {
  return NextResponse.json(
    {
      error: error.response?.data?.error ?? error.message,
    },
    { status: error.status },
  );
};