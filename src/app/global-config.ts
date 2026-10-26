import { environment } from '../environments/environment';

export class GlobalConfig {
  public static readonly apiUrl = environment.apiUrl.replace(/\/$/, '');

  public static readonly getAnnoncesApiUrl = `${this.apiUrl}/annonce`;
  public static readonly getUserAnnoncesApiUrl = `${this.apiUrl}/annonce/user`;
  public static readonly deleteAnnonceApiUrl = `${this.apiUrl}/annonce/delete`;
  public static readonly registerApiUrl = `${this.apiUrl}/security/register`;
  public static readonly loginApiUrl = environment.loginApiUrl;
  public static readonly saveAnnonceApiUrl = `${this.apiUrl}/annonce/save`;
  public static readonly saveImageApiUrl = `${this.apiUrl}/upload/image`;
  public static readonly modifyAnnonceApiUrl = `${this.apiUrl}/annonce/modify`;
  public static readonly getMakeListApi = `${this.apiUrl}/filter/makes`;
  public static readonly getAnnonceFilteredApiUrl = `${this.apiUrl}/annonce/filtre`;
  public static readonly getAnnonceBasicFilter = `${this.apiUrl}/annonce/basicfilter`;
  public static readonly getEnergiesList = `${this.apiUrl}/filter/energies`;
  public static readonly getModelByMakeApi = `${this.apiUrl}/filter/models`;
  public static readonly getCategoryByModelApi = `${this.apiUrl}/filter/category`;
}
