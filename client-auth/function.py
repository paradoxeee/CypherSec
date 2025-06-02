import subprocess
import platform
import requests
import json
from rich.console import Console
from rich.live import Live
from rich.table import Table
from rich.progress import track
from time import sleep
from shutil import get_terminal_size
from logo import print_logo
console = Console()

def clear_terminal():
    """Clear the terminal"""
    if platform.system() == "Windows":
        subprocess.run("cls", shell=True)
    else:
        subprocess.run("clear", shell=True)

def print_the_logo():
    """print the logo into the terminal"""
    clear_terminal()
    logo_lines = print_logo().splitlines()
    term_width = get_terminal_size().columns 

    with Live("", refresh_per_second=30) as live:
        rendered = ""
        for line in logo_lines:
            centered_line = line.center(term_width)
            rendered += f"[bold green]{centered_line}[/bold green]\n"
            live.update(rendered)
            sleep(0.015)

def main_display():
    clear_terminal()
    print_the_logo()
    clear_terminal()
    print("\n")
    console.print("[Access Point: CYPHER-SEC]", style="bold green")
    console.print("If you are here, it means you can create your user...\n", style="bold green")
    
    

