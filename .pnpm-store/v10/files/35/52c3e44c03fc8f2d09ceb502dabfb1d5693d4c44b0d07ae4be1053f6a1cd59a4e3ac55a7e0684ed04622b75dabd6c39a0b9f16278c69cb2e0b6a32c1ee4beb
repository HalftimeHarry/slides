import { ClassName, PointNdTextController, createPlugin, TpError, ValueMap, createNumberTextPropsObject, parseNumber, createRangeConstraint, createStepConstraint, CompositeConstraint, parseRecord } from '@tweakpane/core';

class StepperConstraint {
    constructor(step, edge) {
        this.step = step;
        this.edge = edge;
    }
    constrain(value) {
        var _a, _b;
        return (_b = (_a = this.edge) === null || _a === void 0 ? void 0 : _a.constrain(value)) !== null && _b !== void 0 ? _b : value;
    }
}

class Stepper {
    constructor(val) {
        this.val = val;
    }
    static isObject(obj) {
        if (typeof obj !== "object" || obj === null) {
            return false;
        }
        const val = obj.val;
        if (typeof val !== "number") {
            return false;
        }
        return true;
    }
    static equals(v1, v2) {
        return v1.val === v2.val;
    }
    toObject() {
        return {
            val: this.val,
        };
    }
}
const StepperAssembly = {
    fromComponents: (comps) => comps[0],
    toComponents: (p) => [p],
};

const className$1 = ClassName("step");
class StepperTextView {
    constructor(doc, config) {
        this.buttonsView_ = config.buttonsView;
        this.textView_ = config.textView;
        this.element = doc.createElement("div");
        this.element.classList.add(className$1());
        const buttonsElem = doc.createElement("div");
        buttonsElem.classList.add(className$1("s"));
        buttonsElem.appendChild(this.buttonsView_.element);
        this.element.appendChild(buttonsElem);
        const textElem = doc.createElement("div");
        textElem.classList.add(className$1("t"));
        textElem.appendChild(this.textView_.element);
        this.element.appendChild(textElem);
    }
}

const className = ClassName("step");
class StepperButtonsView {
    constructor(doc, config) {
        this.element = doc.createElement("div");
        this.element.classList.add(className());
        config.viewProps.bindClassModifiers(this.element);
        const btnMinus = doc.createElement("button");
        btnMinus.textContent = "-";
        btnMinus.classList.add(className("b"));
        config.viewProps.bindDisabled(btnMinus);
        this.element.appendChild(btnMinus);
        this.btnMinus = btnMinus;
        const btnPlus = doc.createElement("button");
        btnPlus.textContent = "+";
        btnPlus.classList.add(className("b"));
        config.viewProps.bindDisabled(btnPlus);
        this.element.appendChild(btnPlus);
        this.btnPlus = btnPlus;
    }
}

class StepperButtonsController {
    constructor(doc, config) {
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.step = config.constraint ? config.constraint.step : 1;
        this.view = new StepperButtonsView(doc, {
            value: this.value,
            viewProps: config.viewProps,
        });
        this.view.btnMinus.addEventListener("click", () => {
            var _a;
            const v = (_a = this.value.rawValue) !== null && _a !== void 0 ? _a : 0;
            this.value.setRawValue(v - this.step, {
                forceEmit: true,
                last: true,
            });
        });
        this.view.btnPlus.addEventListener("click", () => {
            var _a;
            const v = (_a = this.value.rawValue) !== null && _a !== void 0 ? _a : 0;
            this.value.setRawValue(v + this.step, {
                forceEmit: true,
                last: true,
            });
        });
    }
}

class StepperTextController {
    constructor(doc, config) {
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.sc_ = new StepperButtonsController(doc, config);
        const axis = {
            constraint: config.constraint.edge,
            textProps: config.textProps,
        };
        this.tc_ = new PointNdTextController(doc, {
            assembly: StepperAssembly,
            axes: [axis],
            parser: config.parser,
            value: this.value,
            viewProps: config.viewProps,
        });
        this.view = new StepperTextView(doc, {
            buttonsView: this.sc_.view,
            textView: this.tc_.view,
        });
    }
    get textController() {
        return this.tc_;
    }
}

// NOTE: JSDoc comments of `InputBindingPlugin` can be useful to know details about each property
// `InputBindingPlugin<In, Ex, P>` means...
// - The plugin receives the bound value as `Ex`,
// - converts `Ex` into `In` and holds it
// - P is the type of the parsed parameters
const StepperInputPlugin = createPlugin({
    id: "input-stepper",
    type: "input",
    accept: (exValue, params) => {
        if (typeof exValue !== "number") {
            return null;
        }
        const result = parseRecord(params, (p) => {
            var _a;
            return ({
                // `view` option may be useful to provide a custom control for primitive values
                view: p.required.constant("stepper"),
                max: p.optional.number,
                min: p.optional.number,
                step: (_a = p.optional.number) !== null && _a !== void 0 ? _a : 1,
            });
        });
        // Return a typed value and params to accept the user input
        return result
            ? {
                initialValue: exValue,
                params: result,
            }
            : null;
    },
    binding: {
        //reader: (_args) => stepperFromUnknown,
        //writer: (_args) => writeStepper,
        reader(_args) {
            return (exValue) => {
                // Convert an external unknown value into the internal value
                return typeof exValue === "number" ? exValue : 0;
            };
        },
        writer(_args) {
            return (target, inValue) => {
                // Use `target.write()` to write the primitive value to the target,
                // or `target.writeProperty()` to write a property of the target
                target.write(inValue);
            };
        },
        constraint(args) {
            const constraints = [];
            const cr = createRangeConstraint(args.params);
            if (cr) {
                constraints.push(cr);
            }
            const cs = createStepConstraint(args.params);
            if (cs) {
                constraints.push(cs);
            }
            return new StepperConstraint(args.params.step ? args.params.step : 1, new CompositeConstraint(constraints));
        },
    },
    controller(args) {
        const v = args.value;
        const c = args.constraint;
        if (!(c instanceof StepperConstraint)) {
            throw TpError.shouldNeverHappen();
        }
        const textProps = ValueMap.fromObject(createNumberTextPropsObject(args.params, v.rawValue));
        return new StepperTextController(args.document, {
            constraint: c,
            parser: parseNumber,
            textProps: textProps,
            value: v,
            viewProps: args.viewProps,
        });
    },
});

const id = "inputs";
const css = ".tp-stepv,.tp-stepv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-stepv_b{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-stepv_b:hover{background-color:var(--btn-bg-h)}.tp-stepv_b:focus{background-color:var(--btn-bg-f)}.tp-stepv_b:active{background-color:var(--btn-bg-a)}.tp-stepv_b:disabled{opacity:.5}.tp-stepv{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-stepv:hover{background-color:var(--in-bg-h)}.tp-stepv:focus{background-color:var(--in-bg-f)}.tp-stepv:active{background-color:var(--in-bg-a)}.tp-stepv:disabled{opacity:.5}.tp-stepv{display:flex;gap:var(--cnt-hp);background:none}.tp-stepv:hover,.tp-stepv:active{background:none}.tp-stepv_t{flex:1}.tp-stepv.tp-v-disabled{opacity:.5}.tp-stepv_b{position:relative;width:var(--cnt-usz)}";
const plugins = [StepperInputPlugin];

export { Stepper, StepperAssembly, StepperButtonsController, StepperButtonsView, StepperTextController, StepperTextView, css, id, plugins };
