import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from "next";
import { parseCookies } from "nookies";

export function withSession<P>(fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const { ['mylinks.token']: token } = parseCookies(ctx);

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        },
      }
    }
    
    return await fn(ctx);
  }
}