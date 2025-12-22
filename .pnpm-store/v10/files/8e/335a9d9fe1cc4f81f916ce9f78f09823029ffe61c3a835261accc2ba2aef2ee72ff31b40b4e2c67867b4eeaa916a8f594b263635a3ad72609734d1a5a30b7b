import { ClassName, forceCast, createPlugin, parseRecord } from '@tweakpane/core';

const className = ClassName('txtr');
class TextAreaView {
    constructor(doc, config) {
        this.onChange_ = this.onChange_.bind(this);
        this.element = doc.createElement('div');
        this.element.classList.add(className());
        config.viewProps.bindClassModifiers(this.element);
        //this.onChange_ = this.onChange_.bind(this);
        const inputElem = doc.createElement('textarea');
        inputElem.rows = config.rows;
        inputElem.cols = 22;
        inputElem.placeholder = config.placeholder;
        inputElem.classList.add(className('i'));
        config.viewProps.bindDisabled(inputElem);
        this.element.appendChild(inputElem);
        this.inputElement = inputElem;
        config.value.emitter.on('change', this.onChange_);
        this.value_ = config.value;
        this.refresh();
    }
    refresh() {
        this.inputElement.value = this.value_.rawValue;
    }
    onChange_() {
        this.refresh();
    }
}

/**
 * @hidden
 */
class TextAreaController {
    constructor(doc, config) {
        this.onInputChange_ = this.onInputChange_.bind(this);
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.rows = config.rows;
        this.placeholder = config.placeholder;
        // console.log( this.rows )
        this.view = new TextAreaView(doc, {
            value: this.value,
            viewProps: this.viewProps,
            rows: this.rows,
            placeholder: this.placeholder,
        });
        this.view.inputElement.addEventListener('keyup', this.onInputChange_);
    }
    onInputChange_(e) {
        //console.log( e.key )
        //if( e.key === 'Enter' ){
        const inputElem = forceCast(e.currentTarget);
        const value = inputElem.value;
        this.value.rawValue = value;
        this.view.refresh();
        //}
    }
}

// NOTE: You can see JSDoc comments of `InputBindingPlugin` for details about each property
//
// `InputBindingPlugin<In, Ex, P>` means...
// - The plugin receives the bound value as `Ex`,
// - converts `Ex` into `In` and holds it
// - P is the type of the parsed parameters
//
const TweakpaneTextareaPlugin = createPlugin({
    id: 'input-template',
    type: 'input',
    accept(exValue, params) {
        if (typeof exValue !== 'string') {
            // Return null to deny the user input
            return null;
        }
        // Parse parameters object
        // console.log(params)
        const result = parseRecord(params, (p) => ({
            // `view` option may be useful to provide a custom control for primitive values
            view: p.required.constant('textarea'),
            rows: p.optional.number,
            placeholder: p.optional.string,
        }));
        if (!result) {
            return null;
        }
        // Return a typed value and params to accept the user input
        return {
            initialValue: exValue,
            params: result,
        };
    },
    binding: {
        reader(_args) {
            return (exValue) => {
                // Convert an external unknown value into the internal value
                return typeof exValue === 'string' ? exValue : '';
            };
        },
        writer(_args) {
            return (target, inValue) => {
                // Use `target.write()` to write the primitive value to the target,
                // or `target.writeProperty()` to write a property of the target
                target.write(inValue);
            };
        },
    },
    controller(args) {
        var _a, _b;
        // Create a controller for the plugin
        return new TextAreaController(args.document, {
            value: args.value,
            rows: (_a = args.params.rows) !== null && _a !== void 0 ? _a : 3,
            placeholder: (_b = args.params.placeholder) !== null && _b !== void 0 ? _b : 'Enter text here',
            viewProps: args.viewProps,
        });
    },
});

const id = 'textarea';
const css = '.tp-txtrv{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-txtrv{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtrv:hover{background-color:var(--in-bg-h)}.tp-txtrv:focus{background-color:var(--in-bg-f)}.tp-txtrv:active{background-color:var(--in-bg-a)}.tp-txtrv:disabled{opacity:.5}.tp-txtrv{display:block;height:auto;padding-bottom:0;overflow:hidden;position:relative}.tp-txtrv.tp-v-disabled{opacity:.5}.tp-txtrv .tp-txtrv_i{font-family:var(--font-family);background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-size:11px;padding:4px;line-height:16px;min-width:0;width:100%;border:none;height:100%;resize:none;margin-bottom:-8px}.tp-txtrv .tp-txtrv_i:focus{outline:none}';
// Export your plugin(s) as constant `plugins`
const plugins = [TweakpaneTextareaPlugin];

export { css, id, plugins };
