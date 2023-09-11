# Helvetica Plus

Helvetica is based on the original [Helvetica template](https://ia.net/writer/support/preview/templates) by iA. It extends its functionality with code highlighting using `highlight.js` and mermaid diagrams using `mermaid.js`.

## Usage

### Code highlighting

`highlight.js` tries to detect the language automaticly. If automatic detection does not work for you, you can specify the language yourself:

````markdown
```python
def greet():
    print('Hello World!')
```
```````

You can diasable code highlight using the `nohighlight` specifier:

````markdown
```nohighlight
This text will not be highlighted.
```
````

### Mermaid diagrams

Mermaid diagrams can be created by using a `<mermaid-js></mermaid-js>`-element:

```html
<mermaid-js>
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
</mermaid-js>
```