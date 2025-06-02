import requests
from requests.exceptions import RequestException
import rich
from rich import print
from rich.console import Console
from function import main_display

def main():
    console = Console()
    url = 'http://localhost:3000/register'
    main_display()
    console.print("Enter your username :", style="bold green", end=" ")
    username = input().lower()
    console.print("Enter your password :", style="bold green", end=" ")
    password = input().lower()

    users = {'username': username, 'password':password}

    try:
        x = requests.post(url, json=users, timeout=5) 
        
        if x.status_code == 201:
            console.print("✅ User create", style="bold green")
        elif x.status_code == 400:
            console.print("❌ Already existing user.", style="bold red")
            
    except requests.ConnectionError:
        print("[bold yellow]🚫 Serveur offline...  [/bold yellow] [bold red](Please contact on Administrator)[/bold red]")
    except requests.Timeout:
        console.print("⚠️ Timeout : the server is not responding ", style="bold yellow")
    except RequestException as e:
        console.print(f"⚠️ query error : {e}", style="bold yellow")

if __name__ == "__main__":
    main()