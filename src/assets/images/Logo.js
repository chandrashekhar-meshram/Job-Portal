import React from 'react';

export const Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAAWCAYAAAAowQktAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVBMzM0MDI2MTA4RTExRUNCODlCRUNBMTM1NEJBQ0NFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVBMzM0MDI3MTA4RTExRUNCODlCRUNBMTM1NEJBQ0NFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUEzMzQwMjQxMDhFMTFFQ0I4OUJFQ0ExMzU0QkFDQ0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUEzMzQwMjUxMDhFMTFFQ0I4OUJFQ0ExMzU0QkFDQ0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4h/qqTAAAG2ElEQVR42uxaXWxU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';