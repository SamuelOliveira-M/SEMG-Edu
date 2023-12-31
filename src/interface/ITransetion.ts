import IAluno from "./IStudent";
import IEndereco from "./IAddrees";
import IStudentGuardians from "./IStudentGuardians";

interface ITransaction {
  dataStudent: IAluno; 
  dataAddress: IEndereco; 
  dataResponsibile: IStudentGuardians;
}

export default ITransaction;
