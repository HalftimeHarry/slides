import { ClassName, createPlugin, parseRecord } from '@tweakpane/core';

function createPlaceholderImage() {
    const svg = `
	<svg width="320" height="50" xmlns="http://www.w3.org/2000/svg">
  <style>
    text {
      font-family: "Menlo", monospace;
      font-size: 12px;
			fill: gray;
    }
  </style>
  <text x="50%" y="55%" text-anchor="middle">
    No Image
  </text>
</svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const image = new Image();
    image.src = URL.createObjectURL(blob);
    return image;
}
function loadImage(src) {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = src;
    // image.onload = () => {
    // };
    // image.onerror = reject;
    return image;
}

const className = ClassName('img');
class PluginView {
    constructor(doc, config) {
        this.element = doc.createElement('div');
        this.element.classList.add(className());
        config.viewProps.bindClassModifiers(this.element);
        this.input = doc.createElement('input');
        this.input.classList.add(className('input'));
        this.input.setAttribute('type', 'file');
        this.input.setAttribute('accept', config.extensions.join(','));
        this.image_ = doc.createElement('img');
        this.image_.id = 'tpimg_' + Math.random().toString(36).slice(2); // need unique for drop
        this.image_.classList.add(className('image'));
        this.image_.classList.add(className(`image_${config.imageFit}`));
        this.image_.crossOrigin = 'anonymous';
        this.image_.onclick = (event) => {
            return config.clickCallback
                ? config.clickCallback(event, this.input)
                : this.input.click();
        };
        this.element.classList.add(className('area_root'));
        this.element.appendChild(this.image_);
        this.element.appendChild(this.input);
    }
    changeImage(src) {
        this.image_.src = src;
    }
    changeDraggingState(state) {
        const el = this.element;
        if (state) {
            el === null || el === void 0 ? void 0 : el.classList.add(className('area_dragging'));
        }
        else {
            el === null || el === void 0 ? void 0 : el.classList.remove(className('area_dragging'));
        }
    }
}

let placeholderImage = null;
class PluginController {
    constructor(doc, config) {
        this.value = config.value;
        this.viewProps = config.viewProps;
        this.view = new PluginView(doc, {
            viewProps: this.viewProps,
            extensions: config.extensions,
            imageFit: config.imageFit,
            clickCallback: config.clickCallback,
        });
        this.onFile = this.onFile.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.view.input.addEventListener('change', this.onFile);
        this.view.element.addEventListener('drop', this.onDrop);
        this.view.element.addEventListener('dragstart', this.onDragStart);
        this.view.element.addEventListener('dragover', this.onDragOver);
        this.view.element.addEventListener('dragleave', this.onDragLeave);
        this.viewProps.handleDispose(() => {
            this.view.input.removeEventListener('change', this.onFile);
            this.view.element.removeEventListener('drop', this.onDrop);
            this.view.element.removeEventListener('dragstart', this.onDragStart);
            this.view.element.removeEventListener('dragover', this.onDragOver);
            this.view.element.removeEventListener('dragleave', this.onDragLeave);
        });
        this.value.emitter.on('change', () => this.handleValueChange());
        this.handleValueChange();
    }
    onFile(event) {
        const files = (event === null || event === void 0 ? void 0 : event.target).files;
        if (!files || !files.length)
            return;
        const file = files[0];
        this.setValue(file);
        // this.updateImage(url);
    }
    onDrop(event) {
        event.preventDefault();
        try {
            const { dataTransfer } = event;
            const file = dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.files[0];
            if (file) {
                // const url = URL.createObjectURL(file);
                // this.updateImage(url);
                this.setValue(file);
            }
            else {
                const imgId = dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.getData('img-id');
                if (imgId) {
                    const img = document.getElementById(imgId);
                    this.setValue(img);
                }
                else {
                    const url = dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.getData('url');
                    if (!url)
                        throw new Error('No url');
                    this.setValue(url);
                }
                // loadImage(url).then(async (image) => {
                // 	console.log('drop', image);
                // 	const clone = await cloneImage(image);
                // 	// this.updateImage(clone.src);
                // 	this.setValue(clone);
                // });
            }
        }
        catch (e) {
            console.error('Could not parse the dropped image', e);
        }
        finally {
            this.view.changeDraggingState(false);
        }
    }
    onDragStart(event) {
        var _a, _b;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('img-id', this.view.image_.id);
        (_b = event.dataTransfer) === null || _b === void 0 ? void 0 : _b.setDragImage(this.view.image_, 0, 0);
    }
    onDragOver(event) {
        event.preventDefault();
        this.view.changeDraggingState(true);
    }
    onDragLeave() {
        this.view.changeDraggingState(false);
    }
    handleImage(image) {
        if (image instanceof HTMLImageElement) {
            this.updateImage(image.src);
        }
        else if (typeof image === 'string' || !image) {
            if (image === 'placeholder' || !image) {
                image = this.handlePlaceholderImage().src;
            }
            this.updateImage(image);
        }
        else {
            this.setValue(image);
        }
    }
    updateImage(src) {
        this.view.changeImage(src);
    }
    setValue(src) {
        if (src instanceof HTMLImageElement) {
            this.value.setRawValue(src);
        }
        else if (src instanceof File) {
            const url = URL.createObjectURL(src) + '#' + src.name;
            src.src = url;
            const img = loadImage(url);
            // 	.catch(() => {
            // 	// URL.revokeObjectURL(url);
            // });
            // URL.revokeObjectURL(url); //todo: revoke sometime.
            this.value.setRawValue(img || src);
        }
        else if (src) {
            this.value.setRawValue(loadImage(src));
        }
        else {
            this.value.setRawValue(this.handlePlaceholderImage());
        }
    }
    handleValueChange() {
        this.handleImage(this.value.rawValue);
    }
    handlePlaceholderImage() {
        if (!placeholderImage) {
            placeholderImage = createPlaceholderImage();
        }
        return placeholderImage;
    }
}

const DEFAULT_EXTENSIONS = ['.jpg', '.png', '.gif'];
const TweakpaneImagePlugin = createPlugin({
    id: 'input-image',
    type: 'input',
    accept(exValue, params) {
        if (!(exValue instanceof HTMLImageElement || typeof exValue === 'string')) {
            return null;
        }
        const result = parseRecord(params, (p) => ({
            view: p.required.constant('input-image'),
            acceptUrl: p.optional.boolean,
            clickCallback: p.optional.function,
            imageFit: p.optional.custom((v) => v === 'contain' || v === 'cover' ? v : undefined),
            extensions: p.optional.array(p.required.string),
        }));
        if (!result) {
            return null;
        }
        return {
            initialValue: exValue,
            params: result,
        };
    },
    binding: {
        reader(_args) {
            return (exValue) => {
                if (exValue.src !== undefined) {
                    return exValue.src === '' ? 'placeholder' : exValue.src;
                }
                else {
                    return typeof exValue === 'string' ? exValue : exValue;
                }
            };
        },
        writer(_args) {
            return (target, inValue) => {
                target.write(inValue);
            };
        },
    },
    controller(args) {
        var _a, _b;
        return new PluginController(args.document, {
            value: args.value,
            imageFit: (_a = args.params.imageFit) !== null && _a !== void 0 ? _a : 'cover',
            clickCallback: args.params.clickCallback,
            viewProps: args.viewProps,
            extensions: (_b = args.params.extensions) !== null && _b !== void 0 ? _b : DEFAULT_EXTENSIONS,
        });
    },
});

const id = 'input-image';
const css = '.tp-imgv{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-imgv{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-imgv:hover{background-color:var(--in-bg-h)}.tp-imgv:focus{background-color:var(--in-bg-f)}.tp-imgv:active{background-color:var(--in-bg-a)}.tp-imgv:disabled{opacity:.5}:root{--tp-plugin-image-dragging-color: hsla(230, 100%, 66%, 1)}.tp-imgv{cursor:pointer;display:inline-flex;height:auto !important;max-height:calc(var(--cnt-usz)*3);border-radius:4px;position:relative}.tp-imgv.tp-v-disabled{opacity:.5}.tp-imgv_input{width:0;height:0;pointer-events:none;visibility:hidden}.tp-imgv_image{width:100%;height:-moz-max-content;height:max-content;max-height:calc(var(--cnt-usz)*3);border:0}.tp-imgv_image_contain{-o-object-fit:contain;object-fit:contain}.tp-imgv_image_cover{-o-object-fit:cover;object-fit:cover}.tp-imgv_area_root{transition:opacity .16s ease-in-out}.tp-imgv_area_dragging{border:2px dashed var(--tp-plugin-image-dragging-color);border-radius:4px;opacity:.6}';
const plugins = [TweakpaneImagePlugin];

export { css, id, plugins };
