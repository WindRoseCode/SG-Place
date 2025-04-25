import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
  pages: {
    signIn: "/",
    signOut: "/"
  },
  providers: [
    CredentialsProvider({

      name: 'Credentials',

      credentials: {
        user: { label: "Usuario", type: "text"},
        senha: { label: "Senha", type: "password" }
      },
      async authorize(credentials, req) {
        if(!credentials){
            return null;
        }
        if(credentials.user === "ny" && credentials.senha === "123"){
            return{
                id: "1",
                usuario:"Anthony",
                user:"ny"
            }
        }

        return null;

      }
    })
  ]

})

export { handler as GET, handler as POST }