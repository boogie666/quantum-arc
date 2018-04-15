var currentTheme = '';

const theme = {
  "images": {
    "headerURL": "header.png"
  },
  "colors": {
      "accentcolor": "#303641",
      "textcolor": "rgba(255,255,255,0.9)",
      "toolbar": "#383C4A",
      "toolbar_text": "#C2CDDB",
      "toolbar_field": "#404552",
      "toolbar_field_text": "#fff",
      "toolbar_field_border": "#252A33",
      "tab_text": "#fff",
      "toolbar_top_separator": "#252A33",
      "toolbar_bottom_separator": "#252A33",
      "toolbar_vertical_separator": "#252A33"
  }
};

browser.theme.update(theme);
