#!/usr/bin/env python3
# -*- coding: utf-8 -*-


from argparse import ArgumentParser
from curses import curs_set, newpad, is_term_resized, wrapper, \
    KEY_UP, KEY_DOWN, KEY_PPAGE, KEY_NPAGE, KEY_HOME, KEY_END, \
    A_REVERSE, A_BOLD, A_ITALIC
from json import load as json_load
from textwrap import wrap


class Window:

    def __init__(self):
        self.pad = newpad(1, 1)
        self.y = 0
        self.off_y = 0
        self.off_x = 0

    def resize(self, height, width):
        self.pad.resize(height, width)
        self.y = 0

    def clear(self):
        self.pad.clear()
        self.y = 0

    def print(self, text="", attr=0):
        self.pad.addstr(self.y, 0, text, attr)
        self.y += 1

    def refresh(self, min_y, min_x, max_y, max_x):
        self.pad.refresh(self.off_y, self.off_x, min_y, min_x, max_y, max_x)


class ListWindow(Window):

    def __init__(self, items):
        super().__init__()
        self.items = items
        self.n_items = len(self.items)
        self.max_item_width = max(len(item) for item in self.items)
        self.current_index = 0

    def refresh(self, min_y, min_x, max_y, max_x):
        self.resize(len(self.items), self.max_item_width + 1)

        if self.current_index < self.off_y:
            self.off_y = self.current_index
        view_height = max_y - min_y + 1
        while self.current_index >= self.off_y + view_height:
            self.off_y += 1

        for y, name in enumerate(self.items):
            if y == self.current_index:
                self.pad.addstr(y, 0, name.ljust(self.max_item_width), A_REVERSE)
            else:
                self.pad.addstr(y, 0, name.ljust(self.max_item_width))

        super().refresh(min_y, min_x, max_y, max_x)

    def move_by(self, delta):
        return self.move_to(self.current_index + delta)

    def move_to(self, new_index):
        old_index = self.current_index
        if 0 <= new_index < self.n_items:
            self.current_index = new_index
        return new_index - old_index


class EndpointWindow(Window):

    def __init__(self):
        super().__init__()
        self.endpoint = {}

    def update(self, endpoint):
        self.endpoint = endpoint

    def refresh(self, min_y, min_x, max_y, max_x):
        view_width = max_x - min_x + 1
        self.resize(200, view_width)
        self.print(f"{self.endpoint['name']} [{self.endpoint['visibility']}] [{self.endpoint['stability']}]", A_BOLD)
        since = self.endpoint.get('since', '0.0.0')
        if since != '0.0.0':
            self.print(f"(since {since})", A_ITALIC)
        self.print()
        description = wrap(self.endpoint["description"], width=view_width - 1)
        for line in description:
            self.print(line)
        self.print()
        for url in self.endpoint["urls"]:
            for method in url["methods"]:
                self.print(f"{method} {url['path']}")
        self.print()
        self.print(f"{self.endpoint['docUrl']}")
        super().refresh(min_y, min_x, max_y, max_x)


class Viewer:

    def __init__(self, filename):
        with open(filename) as f:
            self.spec = json_load(f)
        self.title_window = Window()
        self.endpoint_list_window = ListWindow([endpoint["name"] for endpoint in self.spec["endpoints"]])
        self.endpoint_window = EndpointWindow()

    def _refresh_title(self, min_y, min_x, max_y, max_x):
        title = self.spec["_info"]["title"]
        self.title_window.resize(2, len(title) + 1)
        self.title_window.print(title)
        self.title_window.print("=" * len(title))
        self.title_window.refresh(min_y, min_x, max_y, max_x)

    def _refresh_names(self, min_y, min_x, max_y, max_x):
        self.endpoint_list_window.refresh(min_y, min_x, max_y, max_x)

    def _refresh_details(self, min_y, min_x, max_y, max_x):
        self.endpoint_window.update(self.spec["endpoints"][self.endpoint_list_window.current_index])
        self.endpoint_window.refresh(min_y, min_x, max_y, max_x)

    def refresh(self, screen):
        screen.refresh()
        height, width = screen.getmaxyx()
        aside_width = int(min(self.endpoint_list_window.max_item_width - 1, width / 4))
        self._refresh_title(0, 0, 1, width - 1)
        self._refresh_names(3, 0, height - 1, aside_width)
        self._refresh_details(3, aside_width + 4, height - 1, width - 1)
        return height, width

    def view(self, screen):
        curs_set(0)
        height, width = self.refresh(screen)
        while True:
            try:
                key = screen.getch()
            except KeyboardInterrupt:
                break
            else:
                moved = 0
                if key == ord("q"):
                    break
                elif key == KEY_UP:
                    moved = self.endpoint_list_window.move_by(-1)
                elif key == KEY_DOWN:
                    moved = self.endpoint_list_window.move_by(+1)
                elif key == KEY_PPAGE:
                    moved = self.endpoint_list_window.move_by(-(height - 3))
                elif key == KEY_NPAGE:
                    moved = self.endpoint_list_window.move_by(+(height - 3))
                elif key == KEY_HOME:
                    moved = self.endpoint_list_window.move_to(0)
                elif key == KEY_END:
                    moved = self.endpoint_list_window.move_to(self.endpoint_list_window.n_items - 1)
                if moved:
                    self.endpoint_window.clear()
                    height, width = self.refresh(screen)
                elif is_term_resized(height, width):
                    screen.clear()
                    height, width = self.refresh(screen)


def main(screen):
    parser = ArgumentParser()
    parser.add_argument("filename")
    parsed = parser.parse_args()
    viewer = Viewer(parsed.filename)
    viewer.view(screen)


if __name__ == "__main__":
    wrapper(main)
