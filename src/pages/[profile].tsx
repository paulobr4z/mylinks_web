import { ProfileContent } from '../contents/profile';

export default function Profile({ username }: any) {
  return <ProfileContent username={username} />
}

export async function getServerSideProps(context: any) {
  const { profile } = context.query;
  
  return {
    props: {
      username: profile
    }, 
  }
}