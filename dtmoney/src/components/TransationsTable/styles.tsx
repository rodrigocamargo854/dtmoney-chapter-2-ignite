import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    //criando a tabela para exibir os dados por linha
    table{ 
        width: 100%;
        border-spacing: 0 0.5rem;

        th{ 
          color: var(--text-body);
          font-weight: 400;
          padding: 1rem 2rem;
          text-align: left;
          line-height: 1.5rem;  
        }

        td{ 
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            font-weight:400;
            color: var ( --text-body );
            border-radius: 0.25rem;

            //quando o td é o primeiro recebe esta estilizaçãp

            &:first-child{
                color: var( --text-title );
                
            }
            //para diferenciar as cores dos preçoes de acordo 
            //com a categoria
            &.deposit{
                color: var( --green);
            }
            
            &.withdraw{
                color: var( --red);
            }
        }
    }
`;