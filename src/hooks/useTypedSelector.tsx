import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from '../redux';

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector;
