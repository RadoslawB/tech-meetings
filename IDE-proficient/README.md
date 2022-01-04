# One to rule them all: shortcut

\* Note: 

- `cmd` = `⌘` || `Ctrl` 
- `alt` = `⌥` || `Alt`


Start with `System Preferences => Keyboard => Key Repeat Rate`



<br/>

##  InteliJ ecosystem

Kyemap used in examples is inluced in repository.

### How to define?
- `cmd + , ` open prefferences
- type what you need
- add shortcut or abbreviation.


### Must have
- `Shift + Shift` - search everywhere
- `cmd + B` - go to definition. When on definition, show usages.
- `tab` - code completion
- `ctrl + w` - extend selection. Define `ctrl + q` to shrink selection
- `cmd + shift + ` `[` || `]` - move to left || right tab. 
- `alt + space` - show definition 
- `shift + delete` - delete whole line. It goes to clipboard!
- `cmd = shift + v` - clipboard context menu
- `cmd + sfitt + f` - find in path
- `cmd + r` - replace
- `shfir + F6` - rename - checks occurances, ask to define scope.


### Nice to have:
- `alt + Enter` - Show intention actions. Flip if/else, extract named fn
- `alt + click`  - multiple cursors
- tools window (toggle): `cmd + {1, 2, 3...}`
  - Project
  - Terminal
  - Structure
  - VCS
  - Debugger:   
    - `crl + d` - run debugger
    - `cmd + 8` - toggle breakpoint
  
  
  
### Navigate in code and project: 
 - `cmd + w` - close tab. Works in browsers & terminal 
 - `cmd + \` - split tab vertically
 - `alt + m` - move tab
 - `alt + n` - move cursor to another tab
 - `cmd + arrow up` 
 

  
 


### [Debugger!](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji):
##### Overwrite values, pause execution, forget about console.log
- `crl + d` - run debugger
- `cmd + 8` - toggle breakpoint


### Live templates: `TAB and go`
- `cl`
- `tap`
- `iter`
- `fori`

<br/>
<br/>

## Other: 

- ###### [DIY: dot files](https://github.com/RadoslawB/settings) 
    `.bash_profile`:
    ```
    alias amend="git add . && git commit --amend --no-edit && git push origin -f"
    alias cdp="git checkout develop && git pull origin"
    alias gcdot="git checkout ."
    
    # functions
    
    cfb() {
            git checkout feature/"$1"
    }
    ```

- ##### [keypromoter](https://plugins.jetbrains.com/plugin/9792-key-promoter-x) - InteliJ plugin to get started with shortucts
- ##### [husky - commit hooks in node](https://github.com/typicode/husky) - tidy up code
- ##### [better touch tool](https://folivora.ai/) - customize macOS behaviour 
- ##### [iterm](https://www.iterm2.com/) - modern teminal
- ##### [vim](https://www.vim.org/) - start with vimtutor

### Iterm2 

1. Split pane vertically `cmd + d`
2. Spit pane horizontally `cmd + shift + d`
3. Navigate between banes `cmd + alt + arrow`
4. Close pane `cmd + w`
