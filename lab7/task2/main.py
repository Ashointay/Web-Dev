from models import TelegramPremium, YouTubePremium

def main():
    tg_sub = TelegramPremium(1490, "⭐")
    yt_sub = YouTubePremium(1580)

    subs = [tg_sub, yt_sub]

    print("--- Список моих подписок ---")
    
    total = 0
    for s in subs:
        print(f"Тариф: {s}")
        print(f"Опции: {s.get_details()}")
        print("-" * 30)
        total += s.monthly_fee

    print(f"Итого к оплате: {total} KZT")

if __name__ == "__main__":
    main()