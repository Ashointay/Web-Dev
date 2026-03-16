class Subscription:
    def __init__(self, service_name, monthly_fee):
        self.service_name = service_name
        self.monthly_fee = monthly_fee

    def get_details(self):
        return ""

    def __str__(self):
        return f"{self.service_name} — {self.monthly_fee} KZT/мес."


class TelegramPremium(Subscription):
    def __init__(self, monthly_fee, emoji_status):
        super().__init__("Telegram Premium", monthly_fee)
        self.emoji_status = emoji_status

    def get_details(self):
        return f"Статус: {self.emoji_status}, лимит 4ГБ, уникальные реакции."


class YouTubePremium(Subscription):
    def __init__(self, monthly_fee):
        super().__init__("YouTube Premium (Student)", monthly_fee)

    def get_details(self):
        return "Студенческая подписка: без рекламы, фоновый режим, скачивание видео."