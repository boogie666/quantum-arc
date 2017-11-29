var currentTheme = '';

const theme = {
  "images": {
    "headerURL": "header.png"
  },
  
  "colors": {
    "accentcolor": "#303642",
    "textcolor": "#F5F6F7",
    "toolbar": "#414A59",
    "toolbar_text": "#F5F6F7",
    "toolbar_field": "#F5F6F7",
    "toolbar_field_text": "#303642"
  }

};

browser.theme.update(theme);
