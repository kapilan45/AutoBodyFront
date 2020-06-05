export class GlobalConfig {

  // User connecté Identifiant
  private userConnected = true;

  public static apiUrl = 'http://localhost:8080/api';
  public static getAnnoncesApiUrl = 'http://localhost:8080/api/annonce';
  public static getUserAnnoncesApiUrl = 'http://localhost:8080/api/test/annonce/user';
  public static registerApiUrl = 'http://localhost:8080/api/users/create';
  public static loginApiUrl = 'http://localhost:8080/login';
  public static saveAnnonceApiUrl = 'http://localhost:8080/api/annonce';
  public static supprimerAnnonceApiUrl = 'http://localhost:8080/api';
  public static modifyAnnonceApiUrl = 'http://localhost:8080/api';
  public static getMakeListApi = 'http://localhost:8080/api/makelist';
  public static getAnnonceFiltred = 'http://localhost:8080/api/getAnnonceFiltre';
  static getEnergiesList = 'http://localhost:8080/api/energieslistt';

// TODO
  public static getConnectedUser() : boolean {
    return false;
  }

}
