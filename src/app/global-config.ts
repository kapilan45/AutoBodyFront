export class GlobalConfig {

  // User connecté Identifiant
  userConnected;

  public static apiUrl = 'http://loacalhost:8080/api';
  public static getAnnoncesApiUrl = 'http://localhost:8080/final/annonce';
  public static getUserAnnoncesApiUrl = 'http://localhost:8080/api/test/annonce/user';
  public static registerApiUrl = 'http://localhost:8080/api/control/register';
  public static loginApiUrl = 'http://localhost:8080/api/test/login';
  public static saveAnnonceApiUrl = 'http://loacalhost:8080/api';
  public static supprimerAnnonceApiUrl = 'http://loacalhost:8080/api';
  public static modifyAnnonceApiUrl = 'http://loacalhost:8080/api';
  public static getMakeListApi = 'http://loacalhost:8080/api/makelist';
  public static getAnnonceFiltred = 'http://loacalhost:8080/api/getAnnonceFiltre';
  // TODO

  public static getConnectedUser() : string {
    return null;
  }

}
