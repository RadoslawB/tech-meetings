# Cursor delay until repeat & key repeat rate
For mac: 
<br>
<img width="631" alt="Screenshot 2022-02-14 at 15 49 43" src="https://user-images.githubusercontent.com/23079981/153886500-3e54ce5f-9d1c-4454-9bab-e1f8855fcb6f.png">


# Editor agnostic text navigation

1. `Arrow + option` - move by word
2. `Arrow + option + shift` - select by word
3. `cmd + shift + left arrow` - select from carret to end of line

# Intellij shortcuts

\* Note: 

- `cmd` = `⌘` || `Ctrl` 
- `alt` = `⌥` || `Alt`


### How to define?
- `cmd + , ` open prefferences
- type what you need
- add shortcut or abbreviation - example: rc for resolve conflicts
- search for shortcut


### Must have
- `Shift + Shift` - search everywhere for everything: singatures, actions, files
 - upper case letters search for camel case names
- `cmd + B` - go to definition. When on definition, show usages.
- `Tab` - code completion
- `ctrl + w` - extend selection. Define `ctrl + q` to shrink selection
- `cmd + shift + ` `[` || `]` - move to left || right tab. 
- `alt + space` - show definition 
- `shift + delete` - delete whole line. It goes to clipboard!
- `cmd = shift + v` - clipboard context menu
- `cmd + sfitt + f` - find in files 
- `cmd + r` - replace
- `shfir + F6` - rename - checks occurances, ask to define scope.
- Refactor `ctr + t`
  - Introduce variable / constant / field
  - Extract method
  - Move
- `cmd + d` - duplicate. If no selection, duplicate current line
- clone carrets
- `alt + Enter` - Show intention actions. Flip if/else, extract named fn
- `cmd + [0-9]` - toggle windows. 9 is version control, 1 is project tree

### Navigate in code and project: 
 - `cmd + w` - close tab. Works in browsers & terminal 
 - `cmd + \` - split tab vertically
 - `alt + m` - move tab
 - `alt + n` - move cursor to another tab
 - `cmd + arrow up` 
 


### Live templates: `TAB and go`
- `cl` - in JS files
- `tap`
- `iter`

<br/>

# Plugins
1. [keypromoter](https://plugins.jetbrains.com/plugin/9792-key-promoter-x) - InteliJ plugin to get started with shortucts
2. Tabnine - AI powered completions. 
  3. Show dashboard
  4. Tabnine logo in completion window
  5. Autocomples even comments
3. AWS Explorer
  4. Pick profile & region
  5. Usefull to preview resources

# Other
- get decent terminal
  - iTerm basics: 
    - split pane `cmd + d` - horizontal & `cmd + shift + d` - vertical
    - navigate between tabs (as in Chrome) 
    - `cmd + t` - new
    - `cmd + w` - close 
    - `cmd + shift + left/right arrow` - navigate between
  - show hints on Tab
- configure shell profile. Add aliases and functions. Example:
    `.bash_profile`:
    ```
    alias amend="git add . && git commit --amend --no-edit && git push origin -f"
    alias cdp="git checkout develop && git pull origin"
    
    # functions
    
    cfb() {
            git checkout feature/"$1"
    }
    ```
- ##### [better touch tool](https://folivora.ai/) - customize macOS behaviour 
- [vim](https://www.vim.org/) - start with vimtutor
- [better touch tool](https://folivora.ai/) - customize macOS behaviour 


