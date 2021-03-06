import 'reflect-metadata';
export function TableColumn(columnMetadata) {
    return (target, propertyKey) => {
        const prevData = Reflect.getMetadata('columnsMetadata', target);
        const newData = {
            propertyKey: propertyKey,
            metadata: columnMetadata,
        };
        let data = [];
        if (prevData != undefined) {
            data.push(...prevData);
        }
        data.push(newData);
        Reflect.defineMetadata('columnsMetadata', data, target);
    };
}
export var ColumnType;
(function (ColumnType) {
    ColumnType[ColumnType["STRING"] = 0] = "STRING";
    ColumnType[ColumnType["INTEGER"] = 1] = "INTEGER";
    ColumnType[ColumnType["FLOAT"] = 2] = "FLOAT";
    ColumnType[ColumnType["DATE"] = 3] = "DATE";
    ColumnType[ColumnType["CURRENCY"] = 4] = "CURRENCY";
    ColumnType[ColumnType["CUIT"] = 5] = "CUIT";
    ColumnType[ColumnType["PHONE"] = 6] = "PHONE";
    ColumnType[ColumnType["ENUM"] = 7] = "ENUM";
})(ColumnType || (ColumnType = {}));
export var ColumnContentAlignment;
(function (ColumnContentAlignment) {
    ColumnContentAlignment[ColumnContentAlignment["LEFT"] = 1] = "LEFT";
    ColumnContentAlignment[ColumnContentAlignment["CENTER"] = 2] = "CENTER";
    ColumnContentAlignment[ColumnContentAlignment["RIGHT"] = 3] = "RIGHT";
})(ColumnContentAlignment || (ColumnContentAlignment = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpdG8tdGFibGUvc3JjL2xpYi9kZWNvcmF0b3JzL2NvbHVtbi5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxrQkFBa0IsQ0FBQztBQW9CMUIsTUFBTSxVQUFVLFdBQVcsQ0FBQyxjQUFtQztJQUM3RCxPQUFPLENBQUMsTUFBYyxFQUFFLFdBQW1CLEVBQUUsRUFBRTtRQUM3QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sT0FBTyxHQUFHO1lBQ2QsV0FBVyxFQUFFLFdBQVc7WUFDeEIsUUFBUSxFQUFFLGNBQWM7U0FDekIsQ0FBQztRQUNGLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQU4sSUFBWSxVQVNYO0FBVEQsV0FBWSxVQUFVO0lBQ3BCLCtDQUFVLENBQUE7SUFDVixpREFBVyxDQUFBO0lBQ1gsNkNBQVMsQ0FBQTtJQUNULDJDQUFRLENBQUE7SUFDUixtREFBWSxDQUFBO0lBQ1osMkNBQVEsQ0FBQTtJQUNSLDZDQUFTLENBQUE7SUFDVCwyQ0FBUSxDQUFBO0FBQ1YsQ0FBQyxFQVRXLFVBQVUsS0FBVixVQUFVLFFBU3JCO0FBRUQsTUFBTSxDQUFOLElBQVksc0JBSVg7QUFKRCxXQUFZLHNCQUFzQjtJQUNoQyxtRUFBUSxDQUFBO0lBQ1IsdUVBQVUsQ0FBQTtJQUNWLHFFQUFTLENBQUE7QUFDWCxDQUFDLEVBSlcsc0JBQXNCLEtBQXRCLHNCQUFzQixRQUlqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVDb2x1bW5NZXRhZGF0YSB7XHJcbiAgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgb3JkZXI6IG51bWJlcjtcclxuICBjb2x1bW5OYW1lPzogc3RyaW5nO1xyXG4gIHR5cGU/OiBDb2x1bW5UeXBlO1xyXG4gIGVudW1UeXBlQXNvY2lhdGlvbj86IHtcclxuICAgIGtleTogc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcjtcclxuICAgIGljb246IHN0cmluZztcclxuICAgIHRvb2x0aXA6IHN0cmluZztcclxuICB9W107XHJcbiAgZm9ybWF0Pzogc3RyaW5nO1xyXG4gIGNvbnRlbnRBbGlnbj86IENvbHVtbkNvbnRlbnRBbGlnbm1lbnQ7XHJcbiAgY29sdW1uR3JvdXA/OiBDb2x1bW5Hcm91cDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2x1bW5Hcm91cCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFibGVDb2x1bW4oY29sdW1uTWV0YWRhdGE6IFRhYmxlQ29sdW1uTWV0YWRhdGEpIHtcclxuICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBwcmV2RGF0YSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2NvbHVtbnNNZXRhZGF0YScsIHRhcmdldCk7XHJcbiAgICBjb25zdCBuZXdEYXRhID0ge1xyXG4gICAgICBwcm9wZXJ0eUtleTogcHJvcGVydHlLZXksXHJcbiAgICAgIG1ldGFkYXRhOiBjb2x1bW5NZXRhZGF0YSxcclxuICAgIH07XHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgaWYgKHByZXZEYXRhICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBkYXRhLnB1c2goLi4ucHJldkRhdGEpO1xyXG4gICAgfVxyXG4gICAgZGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YSgnY29sdW1uc01ldGFkYXRhJywgZGF0YSwgdGFyZ2V0KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb2x1bW5UeXBlIHtcclxuICBTVFJJTkcgPSAwLFxyXG4gIElOVEVHRVIgPSAxLFxyXG4gIEZMT0FUID0gMixcclxuICBEQVRFID0gMyxcclxuICBDVVJSRU5DWSA9IDQsXHJcbiAgQ1VJVCA9IDUsXHJcbiAgUEhPTkUgPSA2LFxyXG4gIEVOVU0gPSA3LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb2x1bW5Db250ZW50QWxpZ25tZW50IHtcclxuICBMRUZUID0gMSxcclxuICBDRU5URVIgPSAyLFxyXG4gIFJJR0hUID0gMyxcclxufVxyXG4iXX0=