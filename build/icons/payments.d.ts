/** Docs
 * All UI outline icons are the standard Snowy 24px tall, and have variable widths based on the icon in question
 * You can access them by outline[icon].data.map(icon...)
 * you can get the metadata, such as viewbox, from outline[icon].meta
 */
declare const payments: {
    generic: {
        meta: {
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    paypal: {
        meta: {
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    visa: {
        meta: {
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    mastercard: {
        meta: {
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    maestro: {
        meta: {
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    discover: {
        meta: {
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
    ccv: {
        meta: {
            viewbox: string;
        };
        data: {
            path: string;
            color: string;
        }[];
    };
};
export { payments };
