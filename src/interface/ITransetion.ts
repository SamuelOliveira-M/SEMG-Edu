import IAluno from "./IStudent";
import IEndereco from "./IAddrees";
import IStudentGuardians from "./IStudentGuardians";

interface ITransaction {
  dataStudent: IAluno; 
  dataAddress: IEndereco; 
  dataResponsibile: IStudentGuardians;
  urlImage:string|undefined;
}



export default ITransaction;
