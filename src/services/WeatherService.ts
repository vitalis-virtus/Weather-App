import { AxiosResponse } from "axios";
import api from "../axios";
import { Weather } from "../store/types/types";

export class WeatherService {
  static gerCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }
}
