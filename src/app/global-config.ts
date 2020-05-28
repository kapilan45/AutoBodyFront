export class GlobalConfig {

  // User connecté Identifiant
  private userConnected = true;

  public static apiUrl = 'http://loacalhost:8080/api';
  public static getAnnoncesApiUrl = 'http://localhost:8080/final/annonce';
  public static getUserAnnoncesApiUrl = 'http://localhost:8080/api/test/annonce/user';
  public static registerApiUrl = 'http://localhost:8080/users/create';
  public static loginApiUrl = 'http://localhost:8080/login';
  public static saveAnnonceApiUrl = 'http://loacalhost:8080/api';
  public static supprimerAnnonceApiUrl = 'http://loacalhost:8080/api';
  public static modifyAnnonceApiUrl = 'http://loacalhost:8080/api';
  public static getMakeListApi = 'http://loacalhost:8080/api/makelist';
  public static getAnnonceFiltred = 'http://loacalhost:8080/api/getAnnonceFiltre';
  // TODO

  public static getConnectedUser() : boolean {
    return false;
  }

}
