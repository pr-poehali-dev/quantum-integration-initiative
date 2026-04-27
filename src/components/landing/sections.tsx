import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">🎮 Мгновенная доставка ключей</Badge>,
    title: "Игры для Steam по лучшим ценам.",
    showButton: true,
    buttonText: 'Смотреть каталог'
  },
  {
    id: 'about',
    title: 'Почему выбирают нас?',
    content: 'Тысячи игроков уже сэкономили на покупке Steam-ключей. Официальные ключи, честные цены и поддержка 24/7.'
  },
  {
    id: 'features',
    title: 'Всё просто.',
    content: 'Выбираешь игру — оплачиваешь — получаешь ключ на почту за считанные минуты. Никаких лишних шагов и ожиданий.'
  },
  {
    id: 'testimonials',
    title: 'Нам доверяют игроки.',
    content: 'Более 10 000 довольных покупателей, сотни игр в каталоге и рейтинг 4.9 из 5 — результат говорит сам за себя.'
  },
  {
    id: 'join',
    title: 'Твоя следующая игра ждёт.',
    content: 'Не переплачивай за любимые игры. Получи Steam-ключ прямо сейчас и запускай игру уже через несколько минут.',
    showButton: true,
    buttonText: 'Купить ключ'
  },
]