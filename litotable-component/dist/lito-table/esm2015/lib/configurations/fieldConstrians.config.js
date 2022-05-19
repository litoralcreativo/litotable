/**
 * This class is for date constrains
 */
export class DateConstrain {
    constructor(type, values, style = {}, enable = true) {
        this.trigger = (e) => {
            switch (this.type) {
                case MesurableConstrainType.LESSTHAN: {
                    if (e < this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.MORETHAN: {
                    if (e > this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.EQUALS: {
                    if (e == this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.BETWEEN: {
                    if (this.values.length == 2)
                        if (e > this.values[0] && e < this.values[1])
                            return true;
                        else
                            return false;
                    break;
                }
                case MesurableConstrainType.NOTBETWEEN: {
                    if (this.values.length == 2)
                        if (!(e > this.values[0] && e < this.values[1]))
                            return true;
                        else
                            return false;
                    break;
                }
            }
            return false;
        };
        this.type = type;
        this.values = values;
        this.style = style;
        this.enable = enable;
    }
}
/**
 * This class is for numbers constrains (integer, float, decimal, etc..)
 */
export class NumberConstrain {
    constructor(type, values, style = {}, enable = true) {
        this.trigger = (e) => {
            switch (this.type) {
                case MesurableConstrainType.LESSTHAN: {
                    if (e < this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.MORETHAN: {
                    if (e > this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.EQUALS: {
                    if (e == this.values[0])
                        return true;
                    else
                        return false;
                    break;
                }
                case MesurableConstrainType.BETWEEN: {
                    if (this.values.length == 2)
                        if (e > this.values[0] && e < this.values[1])
                            return true;
                        else
                            return false;
                    break;
                }
                case MesurableConstrainType.NOTBETWEEN: {
                    if (this.values.length == 2)
                        if (!(e > this.values[0] && e < this.values[1]))
                            return true;
                        else
                            return false;
                    break;
                }
            }
            return false;
        };
        this.type = type;
        this.values = values;
        this.style = style;
        this.enable = enable;
    }
}
/**
 * This class is for string constrains
 */
export class StringConstrain {
    constructor(style = {}, enable = true, caseSense = true) {
        this.constrainArray = [];
        this.trigger = (e) => {
            e = e.toString();
            let result = true;
            for (let i = 0; i < this.constrainArray.length; i++) {
                const con = this.constrainArray[i];
                switch (con.type) {
                    case StringConstrainType.STARTSWITH: {
                        if (!(this.caseSensitive
                            ? e.startsWith(con.value)
                            : e.toLocaleLowerCase().startsWith(con.value.toLocaleLowerCase())))
                            result = false;
                        break;
                    }
                    case StringConstrainType.ENDWITH: {
                        if (!(this.caseSensitive
                            ? e.endsWith(con.value)
                            : e.toLocaleLowerCase().endsWith(con.value.toLocaleLowerCase())))
                            result = false;
                        break;
                    }
                    case StringConstrainType.CONTAINS: {
                        if (!(this.caseSensitive
                            ? e.includes(con.value)
                            : e.toLocaleLowerCase().includes(con.value.toLocaleLowerCase())))
                            result = false;
                        break;
                    }
                }
                if (!result)
                    break;
            }
            return result;
        };
        this.style = style;
        this.enable = enable;
        this.caseSensitive = caseSense;
    }
    addConstrain(stringConstrain) {
        this.constrainArray.push(stringConstrain);
    }
    clearConstrains() {
        this.constrainArray = [];
    }
}
export var MesurableConstrainType;
(function (MesurableConstrainType) {
    MesurableConstrainType[MesurableConstrainType["EQUALS"] = 1] = "EQUALS";
    MesurableConstrainType[MesurableConstrainType["MORETHAN"] = 2] = "MORETHAN";
    MesurableConstrainType[MesurableConstrainType["LESSTHAN"] = 3] = "LESSTHAN";
    MesurableConstrainType[MesurableConstrainType["BETWEEN"] = 4] = "BETWEEN";
    MesurableConstrainType[MesurableConstrainType["NOTBETWEEN"] = 5] = "NOTBETWEEN";
})(MesurableConstrainType || (MesurableConstrainType = {}));
export var StringConstrainType;
(function (StringConstrainType) {
    StringConstrainType[StringConstrainType["STARTSWITH"] = 1] = "STARTSWITH";
    StringConstrainType[StringConstrainType["ENDWITH"] = 2] = "ENDWITH";
    StringConstrainType[StringConstrainType["CONTAINS"] = 3] = "CONTAINS";
})(StringConstrainType || (StringConstrainType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRDb25zdHJpYW5zLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpdG8tdGFibGUvc3JjL2xpYi9jb25maWd1cmF0aW9ucy9maWVsZENvbnN0cmlhbnMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCQTs7R0FFRztBQUNILE1BQU0sT0FBTyxhQUFhO0lBS3hCLFlBQ0UsSUFBNEIsRUFDNUIsTUFBb0IsRUFDcEIsUUFBZ0IsRUFBRSxFQUNsQixTQUFrQixJQUFJO1FBT3hCLFlBQU8sR0FBRyxDQUFDLENBQU8sRUFBVyxFQUFFO1lBQzdCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQUUsT0FBTyxJQUFJLENBQUM7O3dCQUMvQixPQUFPLEtBQUssQ0FBQztvQkFDbEIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFBRSxPQUFPLElBQUksQ0FBQzs7d0JBQy9CLE9BQU8sS0FBSyxDQUFDO29CQUNsQixNQUFNO2lCQUNQO2dCQUNELEtBQUssc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUFFLE9BQU8sSUFBSSxDQUFDOzt3QkFDaEMsT0FBTyxLQUFLLENBQUM7b0JBQ2xCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDO3dCQUN6QixJQUFJ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Q0FBQTtJQUNYLCtFQUFjLENBQUE7QUFDaEIsQ0FBQyxFQU5XLHNCQUFzQixLQUF0QixzQkFBc0IsUUFNakM7QUFPRCxNQUFNLENBQU4sSUFBWSxtQkFJWDtBQUpELFdBQVksbUJBQW1CO0lBQzdCLHlFQUFjLENBQUE7SUFDZCxtRUFBVyxDQUFBO0lBQ1gscUVBQVksQ0FBQTtBQUNkLENBQUMsRUFKVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBSTlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uVHlwZSB9IGZyb20gJy4uL2RlY29yYXRvcnMvY29sdW1uLmRlY29yYXRvcic7XHJcblxyXG4vKipcclxuICogVGhpcyBpbnRlcmZhY2UgaXMgZm9yIGNvbmZpZ3VyYXRpb25cclxuICpcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRDb25zdHJpYW5TdHlsZSB7XHJcbiAgcHJvcGVydHlLZXk6IHN0cmluZztcclxuICBjb25zdHJhaW5OYW1lOiBzdHJpbmc7XHJcbiAgdHlwZTogQ29sdW1uVHlwZTtcclxuICBjb25zdHJhaW46IENvbnN0cmFpbjtcclxuICAvKiBtZXRhZGF0YToge1xyXG4gICAgZW5hYmxlOiBib29sZWFuO1xyXG4gICAgdHJpZ2dlcjogKGU6IGFueSkgPT4gYm9vbGVhbjtcclxuICAgIHN0eWxlOiBPYmplY3Q7XHJcbiAgfTsgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIGZvciBldmVyeSBDb25zdHJhaW5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3RyYWluIHtcclxuICBzdHlsZTogYW55O1xyXG4gIGVuYWJsZTogYm9vbGVhbjtcclxuICB0cmlnZ2VyOiAoZTogYW55KSA9PiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyBpcyBmb3IgZGF0ZSBjb25zdHJhaW5zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRGF0ZUNvbnN0cmFpbiBpbXBsZW1lbnRzIENvbnN0cmFpbiB7XHJcbiAgc3R5bGU6IE9iamVjdDtcclxuICBlbmFibGU6IGJvb2xlYW47XHJcbiAgdmFsdWVzOiBbRGF0ZSwgRGF0ZV07XHJcbiAgdHlwZTogTWVzdXJhYmxlQ29uc3RyYWluVHlwZTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHR5cGU6IE1lc3VyYWJsZUNvbnN0cmFpblR5cGUsXHJcbiAgICB2YWx1ZXM6IFtEYXRlLCBEYXRlXSxcclxuICAgIHN0eWxlOiBPYmplY3QgPSB7fSxcclxuICAgIGVuYWJsZTogYm9vbGVhbiA9IHRydWVcclxuICApIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcclxuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgIHRoaXMuZW5hYmxlID0gZW5hYmxlO1xyXG4gIH1cclxuICB0cmlnZ2VyID0gKGU6IERhdGUpOiBib29sZWFuID0+IHtcclxuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgIGNhc2UgTWVzdXJhYmxlQ29uc3RyYWluVHlwZS5MRVNTVEhBTjoge1xyXG4gICAgICAgIGlmIChlIDwgdGhpcy52YWx1ZXNbMF0pIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTWVzdXJhYmxlQ29uc3RyYWluVHlwZS5NT1JFVEhBTjoge1xyXG4gICAgICAgIGlmIChlID4gdGhpcy52YWx1ZXNbMF0pIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTWVzdXJhYmxlQ29uc3RyYWluVHlwZS5FUVVBTFM6IHtcclxuICAgICAgICBpZiAoZSA9PSB0aGlzLnZhbHVlc1swXSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBNZXN1cmFibGVDb25zdHJhaW5UeXBlLkJFVFdFRU46IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID09IDIpXHJcbiAgICAgICAgICBpZiAoZSA+IHRoaXMudmFsdWVzWzBdICYmIGUgPCB0aGlzLnZhbHVlc1sxXSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE1lc3VyYWJsZUNvbnN0cmFpblR5cGUuTk9UQkVUV0VFTjoge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5sZW5ndGggPT0gMilcclxuICAgICAgICAgIGlmICghKGUgPiB0aGlzLnZhbHVlc1swXSAmJiBlIDwgdGhpcy52YWx1ZXNbMV0pKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgaXMgZm9yIG51bWJlcnMgY29uc3RyYWlucyAoaW50ZWdlciwgZmxvYXQsIGRlY2ltYWwsIGV0Yy4uKVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE51bWJlckNvbnN0cmFpbiBpbXBsZW1lbnRzIENvbnN0cmFpbiB7XHJcbiAgc3R5bGU6IE9iamVjdDtcclxuICBlbmFibGU6IGJvb2xlYW47XHJcbiAgdmFsdWVzOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gIHR5cGU6IE1lc3VyYWJsZUNvbnN0cmFpblR5cGU7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0eXBlOiBNZXN1cmFibGVDb25zdHJhaW5UeXBlLFxyXG4gICAgdmFsdWVzOiBbbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgc3R5bGU6IE9iamVjdCA9IHt9LFxyXG4gICAgZW5hYmxlOiBib29sZWFuID0gdHJ1ZVxyXG4gICkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xyXG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgdGhpcy5lbmFibGUgPSBlbmFibGU7XHJcbiAgfVxyXG4gIHRyaWdnZXIgPSAoZTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICBjYXNlIE1lc3VyYWJsZUNvbnN0cmFpblR5cGUuTEVTU1RIQU46IHtcclxuICAgICAgICBpZiAoZSA8IHRoaXMudmFsdWVzWzBdKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE1lc3VyYWJsZUNvbnN0cmFpblR5cGUuTU9SRVRIQU46IHtcclxuICAgICAgICBpZiAoZSA+IHRoaXMudmFsdWVzWzBdKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIE1lc3VyYWJsZUNvbnN0cmFpblR5cGUuRVFVQUxTOiB7XHJcbiAgICAgICAgaWYgKGUgPT0gdGhpcy52YWx1ZXNbMF0pIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTWVzdXJhYmxlQ29uc3RyYWluVHlwZS5CRVRXRUVOOiB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA9PSAyKVxyXG4gICAgICAgICAgaWYgKGUgPiB0aGlzLnZhbHVlc1swXSAmJiBlIDwgdGhpcy52YWx1ZXNbMV0pIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBNZXN1cmFibGVDb25zdHJhaW5UeXBlLk5PVEJFVFdFRU46IHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID09IDIpXHJcbiAgICAgICAgICBpZiAoIShlID4gdGhpcy52YWx1ZXNbMF0gJiYgZSA8IHRoaXMudmFsdWVzWzFdKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIGlzIGZvciBzdHJpbmcgY29uc3RyYWluc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmluZ0NvbnN0cmFpbiBpbXBsZW1lbnRzIENvbnN0cmFpbiB7XHJcbiAgc3R5bGU6IE9iamVjdDtcclxuICBlbmFibGU6IGJvb2xlYW47XHJcbiAgY29uc3RyYWluQXJyYXk6IFN0cmluZ0NvbnN0cmFpbk9iamVjdFtdID0gW107XHJcbiAgY2FzZVNlbnNpdGl2ZTogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHN0eWxlOiBPYmplY3QgPSB7fSxcclxuICAgIGVuYWJsZTogYm9vbGVhbiA9IHRydWUsXHJcbiAgICBjYXNlU2Vuc2U6IGJvb2xlYW4gPSB0cnVlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XHJcbiAgICB0aGlzLmVuYWJsZSA9IGVuYWJsZTtcclxuICAgIHRoaXMuY2FzZVNlbnNpdGl2ZSA9IGNhc2VTZW5zZTtcclxuICB9XHJcbiAgdHJpZ2dlciA9IChlOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIGUgPSBlLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25zdHJhaW5BcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjb24gPSB0aGlzLmNvbnN0cmFpbkFycmF5W2ldO1xyXG4gICAgICBzd2l0Y2ggKGNvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdDb25zdHJhaW5UeXBlLlNUQVJUU1dJVEg6IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgISh0aGlzLmNhc2VTZW5zaXRpdmVcclxuICAgICAgICAgICAgICA/IGUuc3RhcnRzV2l0aChjb24udmFsdWUpXHJcbiAgICAgICAgICAgICAgOiBlLnRvTG9jYWxlTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChjb24udmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSkpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU3RyaW5nQ29uc3RyYWluVHlwZS5FTkRXSVRIOiB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICEodGhpcy5jYXNlU2Vuc2l0aXZlXHJcbiAgICAgICAgICAgICAgPyBlLmVuZHNXaXRoKGNvbi52YWx1ZSlcclxuICAgICAgICAgICAgICA6IGUudG9Mb2NhbGVMb3dlckNhc2UoKS5lbmRzV2l0aChjb24udmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKSkpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU3RyaW5nQ29uc3RyYWluVHlwZS5DT05UQUlOUzoge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhKHRoaXMuY2FzZVNlbnNpdGl2ZVxyXG4gICAgICAgICAgICAgID8gZS5pbmNsdWRlcyhjb24udmFsdWUpXHJcbiAgICAgICAgICAgICAgOiBlLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXMoY29uLnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJlc3VsdCkgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcbiAgYWRkQ29uc3RyYWluKHN0cmluZ0NvbnN0cmFpbjogU3RyaW5nQ29uc3RyYWluT2JqZWN0KSB7XHJcbiAgICB0aGlzLmNvbnN0cmFpbkFycmF5LnB1c2goc3RyaW5nQ29uc3RyYWluKTtcclxuICB9XHJcbiAgY2xlYXJDb25zdHJhaW5zKCkge1xyXG4gICAgdGhpcy5jb25zdHJhaW5BcnJheSA9IFtdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gTWVzdXJhYmxlQ29uc3RyYWluVHlwZSB7XHJcbiAgRVFVQUxTID0gMSxcclxuICBNT1JFVEhBTiA9IDIsXHJcbiAgTEVTU1RIQU4gPSAzLFxyXG4gIEJFVFdFRU4gPSA0LFxyXG4gIE5PVEJFVFdFRU4gPSA1LFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ0NvbnN0cmFpbk9iamVjdCB7XHJcbiAgdHlwZTogU3RyaW5nQ29uc3RyYWluVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTdHJpbmdDb25zdHJhaW5UeXBlIHtcclxuICBTVEFSVFNXSVRIID0gMSxcclxuICBFTkRXSVRIID0gMixcclxuICBDT05UQUlOUyA9IDMsXHJcbn1cclxuIl19