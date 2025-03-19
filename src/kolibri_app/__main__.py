import datetime
import os
import sys
from multiprocessing import freeze_support
from kolibri_app.application import KolibriApp
from kolibri_app.constants import WINDOWS
from kolibri_app.logger import logging

if WINDOWS:
    try:
        from pystray import Icon, MenuItem as Item
        from PIL import Image
        import wx
    except ImportError:
        logging.error("Missing dependencies: pystray, Pillow, wxPython. Install them before running the app.")
        sys.exit(1)

def create_tray_icon(app):
    """Creates a system tray icon for Kolibri App on Windows."""
    image = Image.open("icons/kolibri.ico")

    def show_app(icon, item):
        """Restore the Kolibri App window."""
        app.Raise()

    def exit_app(icon, item):
        """Exit the app properly."""
        icon.stop()
        wx.CallAfter(app.Exit)

    menu = (Item("Show Kolibri", show_app), Item("Exit", exit_app))
    icon = Icon("Kolibri", image, menu=menu)
    icon.run()

def main():
    logging.info("Kolibri App Initializing")
    logging.info("Started at: {}".format(datetime.datetime.now()))

    app = KolibriApp()
    
    if WINDOWS:
        import threading
        tray_thread = threading.Thread(target=create_tray_icon, args=(app,))
        tray_thread.daemon = True
        tray_thread.start()

    app.MainLoop()

if __name__ == "__main__":
    freeze_support()
    main()
