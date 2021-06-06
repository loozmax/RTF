import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public sendRequest(): void {
    const url = "https://rtfnews.site/rtf/create_magazine/";
    this.httpClient.post(url,
      {
        "name": "День \n попытки",
        "date": "2021-05-30",
        "main": [
          {
            "number": 0,
            "text": [],
            "maket": "FIRST_PAGE",
            "images": []
          }
        ],
        "chapterList": [
          {
            "number": 1,
            "text": [],
            "maket": "CHAPTER_LIST",
            "images": []
          }
        ],
        "articles": [
          {
            "name": "Когда отгремят салюты",
            "author": "Анна Минеева",
            "pages": [
              {
                "number": 1,
                "maket": "FIRST_PAGE",
                "text": [
                  "Яркие вспышки и фонтан огней фейерверков радуют нас и наполняют сердца восторгом. Салюты завораживают, поднимают настроение, заполняют всю нашу фотоплёнку. При этом почти никто не задумывался, как полчаса нашей радости отразятся на растениях, птицах, животных, насекомых."
                ]
              },
              {
                "number": 5,
                "maket": "COLUMNS_PAGE",
                "text": [
                  "После взрыва пиротехники выделяется углекислый газ. Например, в США после Дня Независимости его количество в атмосфере составило 50 тысяч тонн, что можно приравнять к выбросам этого газа во время лесных пожаров более чем на 1000 гектарах земли!",
                  "В Минске в ночь на первое января 2019 года от взрывов пиротехники пострадали 27 человек. И это только люди с видимыми повреждениями. ",
                  "По данным федерального ведомства по охране окружающей среды, ежегодно немцы тратят от 100 до 150 миллионов евро на фейерверки. Данное количество пиротехники суммарно приводит к выбросу в атмосферу до 4500 тонн мелкодисперсной пыли."
                ]
              },
              {
                "number": 2,
                "maket": "BACKGROUNG_PICTURE",
                "text": [
                  "Во время запуска фейерверка в воздухе рассеиваются частицы различных химических веществ, которые затем просачиваются в почву и загрязняют воду. Многие из них токсичны для людей — являются канцерогенными или нарушающими гормональный баланс веществами. Не стоит забывать и о дыме, попадающем в лёгкие, а также о частицах пластика и другого мусора, оставленного после запуска фейерверков."
                ]
              },
              {
                "number": 4,
                "maket": "BACKGROUNG_PICTURE",
                "text": [
                  "Шоу из фейерверков проходят не часто, их влияние на здоровье человека неизменно. Токсичные смеси постепенно загрязняют водоёмы, землю и воздух, а многие из пиротехнических химических веществ остаются в окружающей среде, не разрушаясь. Кроме того, шум и грохот фейерверков наносят вред представителям животного мира. Дикие или домашние птицы и животные испытывают сильный стресс, могут быть дезориентированы и ранены, вследствие чего погибают. "
                ]
              }
            ]
          },
          {
            "name": "salut",
            "date": "2021-04-07",
            "pages": []
          }
        ]
      }

    );
  }
}
