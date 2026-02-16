import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], // Подключаем карточку для отображения
  templateUrl: './product-list.html', // Твой HTML файл
  styleUrls: ['./product-list.css']    // Твой CSS файл
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1, name: 'Клавиатура Ultra-S ULTKB03 серый', price: 24116, rating: 5.0,
      description: 'Представляем игровую клавиатуру от Ultra-S — мощный инструмент, созданный для побед и максимального комфорта!\n' +
        'Эта модель сочетает стиль, технологичность и продуманный функционал. Клавиатура поддерживает три режима подключения: USB Type-C, 2.4 GHz и Bluetooth, что делает её универсальной для любого рабочего места или геймерской станции.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/p48/72176322.jpg?format=gallery-medium',
      images: [], link: 'https://kaspi.kz/shop/p/ultra-s-ultkb03-seryi-147884231/'
    },
    {
      id: 2, name: 'Мышь Ultra-S ULTMICE11-H2 белый', price: 8900, rating: 4.9,
      description: 'Представляем игровую мышь от Ultra-S — сочетание стиля, мощности и высокой функциональности для настоящих побед.\n' +
        'Эта модель обеспечивает молниеносный отклик и точность благодаря переключаемым режимам DPI: 800, 1200, 1600 и 3200. Даже при резких движениях курсор остаётся максимально стабильным и без пропусков. Мышь поддерживает разные режимы подключения — через Bluetooth к смартфонам и планшетам, а также через адаптер к ПК и ноутбукам. Совместимость гарантирована с Windows, Android и Apple.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pee/69280945.jpg?format=gallery-medium',
      images: [], link: 'https://kaspi.kz/shop/p/ultra-s-ultmice11-h2-belyi-146975135/'
    },
    {
      id: 3, name: 'Мышь Ultra-S ULTMICE10-M100 черный-красный', price: 8900, rating: 4.9,
      description: ' Представляем ультралёгкую и эргономичную игровую мышь от Ultra-S — ваш надёжный инструмент для работы и побед!\n' +
        'Эта мышь весит всего 70 г и имеет продуманные размеры, что обеспечивает лёгкость и комфорт даже при длительном использовании. Рифлёное колёсико с 3D противоскользящим рельефом гарантирует плавное и точное управление, а встроенное место для приёмника решает проблему потери донгла. Продуманная эргономика позволяет руке меньше уставать, а стильный дизайн подойдёт для любого стиля хвата.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcc/p6b/69267270.jpg?format=gallery-medium',
      images: [], link: 'https://kaspi.kz/shop/p/ultra-s-ultmice10-m100-chernyi-krasnyi-146971883/'
    },
    {
      id: 4, name: 'Мышь Ultra-S ULTMICE10-M100 черный', price: 8899, rating: 4.6,
      description: 'Представляем ультралёгкую и эргономичную игровую мышь от Ultra-S — ваш надёжный инструмент для работы и побед!\n' +
        'Эта мышь весит всего 70 г и имеет продуманные размеры, что обеспечивает лёгкость и комфорт даже при длительном использовании. Рифлёное колёсико с 3D противоскользящим рельефом гарантирует плавное и точное управление, а встроенное место для приёмника решает проблему потери донгла. Продуманная эргономика позволяет руке меньше уставать, а стильный дизайн подойдёт для любого стиля хвата.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/p12/69267324.jpg?format=gallery-medium',
      images: [], link: 'https://kaspi.kz/shop/p/ultra-s-ultmice10-m100-chernyi-146971897/'
    },
    {
      id: 5, name: 'Стабилизатор напряжения Ресанта АСН-1000/1-Ц', price: 19890, rating: 4.8,
      description: 'Контакты Сервисных Центров:\n' +
        '• г. Актобе, жилой массив Коктем...',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/he3/63765255815198.jpg?format=gallery-medium',
      images: [], link: 'https://kaspi.kz/shop/p/stabilizator-naprjazhenija-resanta-asn-1000-1-ts-5400768/'
    },
    {
      id: 6,
      name: 'Защитная накладка Limmalin для MacBook Air 13.6 A2681/A2442/A2485',
      price: 748,
      rating: 4.9,
      description: ' ',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h03/81125621170206.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/zaschitnaja-nakladka-limmalin-dlja-macbook-air-13-6-a2681-a2442-a2485-110714986/'
    },
    {
      id: 7,
      name: 'Ноутбук YAMI Notebook L13 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / Notebook L13',
      price: 189990,
      rating: 4.9,
      description: 'YAMI L13 — это производительный ноутбук, сочетающий в себе баланс мощности и доступной цены. Оснащённый современным процессором Intel N95 и 16 ГБ оперативной памяти, он легко справляется с многозадачностью: работа в офисных программах, браузере с множеством вкладок, онлайн-обучение и видеозвонки проходят без зависаний.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/p0e/86623791.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/yami-notebook-l13-15-6-16-gb-ssd-512-gb-win-11-pro-notebook-l13-149985825/'
    },
    {
      id: 8, name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/512 Гб серебристый', price: 480803, rating: 5.0,
      description: ' ',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/peb/pec/37019263.png?format=gallery-medium',
      images: [], link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-512-gb-serebristyi-138202072/?c=750000000'
    },
    {
      id: 9, name: 'ITBRO i5-10400F / RTX 2060 Super / 32 Гб / SSD 1000 Гб / Win 11 Pro', price: 529000, rating: 4.9,
      description: 'Игровой компьютер ITBRO — мощное решение для геймеров, объединяющее в себе высокую производительность, современные технологии и стильный дизайн. С процессором Intel Core i5-10400F и видеокартой RTX 2060 Super вы сможете наслаждаться любимыми играми на максимальных настройках.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/pdc/58996874.png?format=gallery-medium',
      images: [], link: 'https://kaspi.kz/shop/p/itbro-i5-10400f-rtx-2060-super-32gb-ssd-1000-gb-win-11-pro-132154202/'
    },
    {
      id: 10, name: 'Крепление для монитора NB F80 черный', price: 7746, rating: 4.9,
      description: 'Крепление для мониторов NB F80 — оптимальное решение для организации рабочего пространства, обеспечивающее максимальный комфорт и эргономику при работе за компьютером.',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/hf5/81272594268190.png?format=gallery-medium',
      images: [], link: 'https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/'
    }
  ];
}
